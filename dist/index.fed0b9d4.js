const recipeContainer=document.querySelector(".recipe"),timeout=function(e){return new Promise((function(o,i){setTimeout((function(){i(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},showRecipe=async function(){try{const e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc5b"),o=await e.json();if(!e.ok)throw new Error(`${o.message} (${e.status})`);console.log(e),console.log(o);let{recipe:i}=o.data;i={id:i.id,title:i.title,publisher:i.publisher,sourceUrl:i.source_url,image:i.image_url,servings:i.servings,cookingTime:i.cooking_time,ingredients:i.ingredients},console.log(i)}catch(e){console.log(e)}};showRecipe();
//# sourceMappingURL=index.fed0b9d4.js.map
