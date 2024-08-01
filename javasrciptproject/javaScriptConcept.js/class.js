// class product{

    // properties -> variables -> data member
    // name ="priyanshu";
    // price;
    // rating;
    // #rating

    
    // constructor(n,p,r){
    //     console.log("calling the constuctor");
    //     this.name = n;
    //     this.price = p;
    //     this.#rating = r;
    // }
   

    // static display2(){
    //     console.log("Calling a static method","rating is private acess");
    // }
    

    //  behaviours -> functions -> member function
//      display() {
//         console.log("Displaying the current product",this.#rating);
        
//     }
// }
// const p = new product();  new -> create an empty plain oject
//   p.name="sid";
// p.rating we cannot update rating outside the class because we declared it private modifer #
// console.log(p);
// p.display();

// const c = new product("priyanshu",20000,5);
// console.log(c);
// console.log(c.price)
 

// product.display2()




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Getter and Setter

class product{
    #rating

    get ratinggetter(){
        console.log(this.#rating);
    }

    set ratingSetter(r){
        if(r<0) return;
        this.#rating = r;
    }
}

const p = new product();
p.ratingSetter=10
p.ratinggetter()