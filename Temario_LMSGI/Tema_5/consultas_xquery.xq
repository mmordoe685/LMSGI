(: 1. Título con número de autores entre paréntesis :)
for $book in /bookstore/book
let $count := count($book/author)
return <titulo>{concat($book/title, " (", $count, ")")}</titulo>

(: 2. Libros escritos en años que terminan en "3" :)
for $book in /bookstore/book
where ends-with(string($book/year), "3")
return $book

(: 3. Libros cuya categoría empieza por "C" :)
for $book in /bookstore/book
where starts-with($book/@category, "C")
return $book

(: 4. Libros con "X" o "x" en el título, ordenados descendentemente :)
for $book in /bookstore/book
where contains(lower-case($book/title), "x")
order by $book/title descending
return $book

(: 5. Título y número de caracteres que tiene el título :)
for $book in /bookstore/book
return 
  <titulo>
    <nombre>{ $book/title }</nombre>
    <longitud>{ string-length($book/title) }</longitud>
  </titulo>

(: 6. Años únicos de publicación, etiquetados como <año> :)
for $year in distinct-values(/bookstore/book/year)
order by $year
return <año>{ $year }</año>

(: 7. Autores únicos, ordenados por número de caracteres :)
for $author in distinct-values(/bookstore/book/author)
order by string-length($author)
return <autor>{ $author }</autor>

(: 8. Títulos en una tabla HTML :)
<html>
  <body>
    <table border="1">
      {
        for $book in /bookstore/book
        return <tr><td>{ $book/title }</td></tr>
      }
    </table>
  </body>
</html>
