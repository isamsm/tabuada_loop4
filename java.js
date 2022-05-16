document.write("<table border='1' align='center'>")

for (let x = 1; x <= 29; x++) {
    document.write("<tr class='linha"+x+"'>")
    if (x % 2 == 1) {
        for (let y = 1; y <= 10; y++) {
        document.write("<td>")
        document.write(y + ' * ' + x + ' = ' + (x * y))
        document.write("</td>")
        } 
    }
}

document.write("</tr>")
document.write("</table>")