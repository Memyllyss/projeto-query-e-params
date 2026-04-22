// classificacao de nomes atraves do switch case

function classificacaoNomes(casos) {

   

   switch (casos) {
      case 1:
         return {
            nome: "Murilo",
            classificacao: "A mais loser"
         };

      case 2:
         return {
            nome: "Estefani",
            classificacao: "O mais legal"
         };

      default:
         return {
            nome: "Emilly Vick",
            classificacao: "A melhor"
         };
   }
}

export { classificacaoNomes };



