PonyPet
======

##A Simple Interactive Pony library. 

Use this library to create a pony that you can pet, poke it's eyes, boop it's snout, and tap it's muzzle. 

To use, you'll need to add the ponyPet folder to your website, then add the following HTML:

```
<script src="ponyPet/ponyPet.js"></script>
<span data-ponypet></span>
```

If you do not want to place the ponyPet folder in your root directory of your website, 
you can specify the location of it.

```
<script src="someOtherPath/whatHaveYou/ponyPet.js"></script>
<span data-ponypet data-ponypet-path="someOtherPath/whatHaveYou"></span>
```

If you do not like the default size of 200 by 200 pixels, you can change this as well.
```
<script src="ponyPet/ponyPet.js"></script>
<span data-ponypet data-ponypet-width="300" data-ponypet-height="300"></span>
```

But, why?
------
u/SFyr made all of the images used in this project. I thought they were perfect for 
a simple JavaScript game, so I made this nonsense. 
[Original Reddit submission](https://www.reddit.com/r/mylittlepony/comments/3dpgvo/i_made_a_handful_of_animated_expressions_for_lyra/)