const ar=[20,12]//array
const obj={
    0:20,
    1:12,
    push:function (newItem){

        const key=this.length;
        this[key]=newItem;
        this.length=this.length+1;

    },
    length:2,
};
console.table(ar);
console.table(obj);//this is an object


//adding the push method
