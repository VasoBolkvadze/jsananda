# jsananda
### javascript extensions in bliss
#### no dependencies, pure javascript
> ## Date
> * string : new Date().format('dd-MM-yyyy'); // 15-09-2014
> * string : new Date().timeSince(); // 1 წამის წინ (Georgian Only)

> ## String
> * bool : 'Foo'.startsWith('F'); // true
> * string : '{0} + {1} = {2}'.format(5,3,8); // 5 + 3 = 8

> ## Object
> * dynamic : byString([string]);
> ```js
> var o = {
>   foo:{
>     bar:'1'
>   },
>   boo:'x'
> };
> o.byString('foo.bar');
> // '1'
> o.byString('foo');
> // {bar:'1'}
> ```
>
> * Array : toArray([keyName],[valueName]);
> ```js
> var o = {
>   x:1,
>   y:2,
>   foo:[1,2,3],
>   boo:{
>     z:5
>   }
> };
> o.toArray('K','V');
> // [
> //    {K:'x',V:1},
> //    {K:'y',V:2},
> //    {K:'foo',V:[1,2,3]},
> //    {K:'boo',V:{z:5}}
> // ]
> ```

> ## Array
> * Array : clean();
> ```js
> var arr = [1,null,5,undefined,4,2,3,null,null];
> arr.clean();
> // [1,5,4,2,3]
> ```
> * Array : flatten();
> ```js
> var nestedArrays = [
>         1,
>         [
>           2,
>           3,
>           [4,5,6]
>         ],
>         [7,8]
>         9
>];
> nestedArrays.flatten();
> // [1,2,3,4,5,6,7,8,9]
> ```
