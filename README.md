Endpoints
https://pokeapi.co/api/v2/pokemon/{nombre} Busca un Pokémon por nombre
https://pokeapi.co/api/v2/pokemon/{id} Busca un Pokémon por ID

Estructura del proyecto
index.html 
index.css
index.js

Decisiones tomadas
Usar async/await
Normalizar input con toLowerCase().trim()
Mostrar loading antes de cada búsqueda
Ocultar resultados anteriores

Dificultades encontradas
Problema: Los tipos vienen dentro de data.types[].type.name  
Solución: Usar map() para sacar solo los nombres

Problema: El usuario podía buscar sin escribir nada  
Solución: Validar con trim()

Problema: La API tiene múltiples formatos de imagen  
Solución: Usar sprites.front_default