# devhunt

Pour test :

1 . npm install
2 . npm run dev
3 . Faite des requetes avec thunder client(extension vscode) ou postman
4 . url : 'http://localhost:5000/auth/login'
5 . body JSON :
{
"email": "herizo@yahoo.com",
"password": "honty"
}
6 . Vous aurez des reponses en JSON

Pour la partie jwt AuthMiddleware permet de protege des routes tel que
app.use("/course" , AuthMiddleware , courseRoute)
// il aura donc besoin de jwt ou token pour pouvoir acceder a cette route
