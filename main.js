// alert("加载成功")
require.config({
    paths: {
       'recipe':'chap2/recipe2-1b'
    }
});
require(['recipe'], function (recipe){
    alert(recipe.add(1,2))
});