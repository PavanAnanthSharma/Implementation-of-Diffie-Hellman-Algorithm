<script>
	
function power(a, b, p)
{
	if (b == 1)
		return a;
	else
		return((Math.pow(a, b)) % p);
}


var P, G, x, a, y, b, ka, kb;

P = 23;
document.write("The value of P:" + P + "<br>");

G = 9;
document.write("The value of G:" + G + "<br>");

a = 4;
document.write("The private key a for Alice:" +
			a + "<br>");

x = power(G, a, P);

b = 3;
document.write("The private key b for Bob:" +
			b + "<br>");

y = power(G, b, P);

ka = power(y, a, P); 
kb = power(x, b, P); 

document.write("Secret key for the Alice is:" +
			ka + "<br>");
document.write("Secret key for the Bob is:" +
			kb + "<br>");

</script>
