walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	// subseqently, I stole the whole thing from
	// https://github.com/panicsteve/cloud-to-butt
	// .svf - 2015-10-08
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Kardashians\b/g, "Several Interdimensional Gila Monsters");
	v = v.replace(/\bthe Kardashians\b/g, "Several Interdimensional Gila Monsters");
	v = v.replace(/\bthe kardashians\b/g, "Several Interdimensional Gila Monsters");
	v = v.replace(/\bKanye West\b/g, "Kanye Interdimensional Gila Monster");
	v = v.replace(/\bKim Kardashian\b/g, "Kim Interdimensional Gila Monster");
	v = v.replace(/\bKourtney Kardashian\b/g, "Kourtney Interdimensional Gila Monster");
	v = v.replace(/\bKhloe Kardashian\b/g, "Khloe Interdimensional Gila Monster");
	v = v.replace(/\bBrody Jenner\b/g, "Brody Interdimensional Gila Monster");
	v = v.replace(/\bRob Kardashian\b/g, "Rob Interdimensional Gila Monster");
	v = v.replace(/\bKendall Jenner\b/g, "Kendall Interdimensional Gila Monster");
	v = v.replace(/\bKylie Jenner\b/g, "Kylie Interdimensional Gila Monster");
	v = v.replace(/\bKardashian\b/g, "Interdimensional Gila Monster");
	
	textNode.nodeValue = v;
}


