export const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/62120617?v=4",
        name: "Felipe Borges",
        role: "Full Stack Developer @Apicbase"
      },
      content: [
          { type: 'paragraph', content: 'Salve rapeize ' },
          { type: 'paragraph', content: 'Acabei de subir mais um projetinho que fiz no curso da Japa. O nome do projeto é NaiceToMiTwo 🚀' },  
       
          { type: 'link', content: 'japa.design/naicetomitwo' }
      ], 
      publishedAt: new Date('2023-12-18 20:00:00')   
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://odia.ig.com.br/_midias/jpg/2023/12/18/398x470/1_marcelinho_carioca__1_-31459249.jpg",
        name: "Marcelinho Carioca",
        role: "Batedor de falta do Corinthians"
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de sair do show do Tardezinha, Thiaguinho mandou bem demais como sempre!'},  
       
          {type: 'link', content: '#amasso #domingando'}
      ], 
      publishedAt: new Date('2023-12-15 20:00:00')  
      
    },
  ];

