const express = require('express')
const next = require('next')
const cookieParser = require("cookie-parser")
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const authenticate = require("./auth/authenticate")

const OPTION_COOKIES = {
   signed: true,
   httpOnly: true,
   path: "/",
   domain: "localhost",
   maxAge: 1000*60*60*24*7, 
}

app
   .prepare()
   .then(() => {
      const server = express()
      server.use(express.json())
      server.use(cookieParser("coder9s"))

      server.post("/api/login" , (req,res) => {
         const { email , password } = req.body;
         authenticate(email, password).then((token) => {
            res.cookie("token" , token , OPTION_COOKIES);
            res.json(token)
         })
      })
      
      server.post("/api/logout" , (req,res) => {
         res.clearCookie("token");
         return res.status(200).redirect('/login');
      })

      server.get('*', (req, res) => {
         return handle(req, res)
      })

      server.listen(3000, (err) => {
         if (err) throw err
         console.log('> Ready on http://localhost:3000')
      })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})