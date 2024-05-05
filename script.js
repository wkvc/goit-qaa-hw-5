// ZROZUMIENIE KONCEPCJI //

// Słowo kluczowe this w języku JavaScript odnosi się do bieżącego kontekstu wykonania, 
// czyli do obiektu, w którym zostało wywołane. Jego główne znaczenie polega na umożliwieniu 
// dostępu do właściwości i metod obiektu, na którym została wywołana funkcja, 
// bez potrzeby odwoływania się do niego bezpośrednio po jego nazwie. 
// this jest dynamicznie związane z kontekstem, w którym jest używane, co oznacza, 
// że jego wartość może się zmieniać w zależności od tego, jak funkcja jest wywoływana.

//////////// example 1

const person = {
    name: "John",
    greet() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.greet(); // Wyświetli: "Hello, my name is John"

//   W tym przykładzie this odnosi się do obiektu person. 
//   Gdy metoda greet jest wywoływana na obiekcie person, 
//   this.name odnosi się do właściwości name w obiekcie person.

//////////// example 2

const user1 = {
    username: "Maciej",
    showName() {
      console.log(this.username);
    },
  };
  
  user1.showName(); //Wyświetli: Maciej

  // W tym przykładzie this odnosi się do obiektu user, działa analogicznie do przykładu wyżej.

// ZASTOSOWANIE PRAKTYCZNE //

const user = {
    username: "Maciej",
    showName() {
      console.log("Username:", this.username);
    }
  };
  
  // Wywołanie metody showName()
  user.showName(); // Wyświetli: "Username: Maciej"

//   W tym przykładzie this jest używane w metodzie 'showName', aby odnosić się do właściwości 
//   username tego samego obiektu, na którym jest wywoływana metoda. Dzięki temu metoda showName 
//   jest w stanie uzyskać dostęp do właściwości username obiektu person.

// ROZSZERZONY PRZYKLAD //

const bookshelf = {
    authors: [],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    }
  };
  
  // Dodanie kilku autorów do półki na książki
  bookshelf.addAuthor("Stephen King");
  bookshelf.addAuthor("Richard A. Knaak");
  bookshelf.addAuthor("J.R.R Tolkien");
  
  // Pobranie listy autorów za pomocą metody getAuthors()
  const authorsList = bookshelf.getAuthors();
  console.log("Lista autorów na półce z książkami:", authorsList);

//   W tym rozszerzonym przykładzie obiekt bookshelf zawiera właściwość authors jako tablicę, 
//   do której dodajemy i z której pobieramy autorów. Metody getAuthors i addAuthor używają 
//   słowa kluczowego this, aby odnosić się do samego obiektu bookshelf. Dzięki temu możemy 
//   dodawać nowych autorów do półki na książki za pomocą metody addAuthor i pobierać listę 
//   autorów za pomocą metody getAuthors.