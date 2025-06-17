import Like from '../model/like.js';
import CrudRepository from './crud-repository.js';

class LikeRespository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch(error) {
            throw error;
        }
    }
}

export default LikeRespository;















/**
 * Represents a repository for managing 'Like' entities.
 * This class extends the `crudRepository` to inherit common CRUD operations.
 * It initializes the repository with the 'Like' model.
 *
  *
 */

/**
 In JavaScript, the extends keyword is used in class declarations to create a subclass that 
 inherits properties and methods from a parent class. This is part of the class-based inheritance 
 model in JavaScript.

Explanation:
Inheritance: By using extends, the likeRepository class inherits from the crudRepository class. This 
means that likeRepository will have access to all the methods and properties defined in crudRepository.

Code Reusability: Inheriting from a parent class allows you to reuse code. If crudRepository has common 
functionality (like methods for creating, reading, updating, and deleting data), likeRepository can use 
those methods without having to redefine them.

Polymorphism: You can override methods from the parent class in the subclass. This allows you to provide
 specific implementations in likeRepository while still retaining the structure of crudRepository.


 used /explain (rerun without)
In JavaScript, the extends keyword is used in class declarations to create a subclass that inherits 
properties and methods from a parent class. This is part of the class-based inheritance model in 
JavaScript.

Explanation:
Inheritance: By using extends, the likeRepository class inherits from the crudRepository class. 
This means that likeRepository will have access to all the methods and properties defined in 
crudRepository.

Code Reusability: Inheriting from a parent class allows you to reuse code. If crudRepository 
has common functionality (like methods for creating, reading, updating, and deleting data), 
likeRepository can use those methods without having to redefine them.

Polymorphism: You can override methods from the parent class in the subclass. This allows 
you to provide specific implementations in likeRepository while still retaining
 the structure of crudRepository.

Example:
Here’s a simple example to illustrate:

class crudRepository {
    create(item) {
        console.log("Creating item:", item);
    }
}

class likeRepository extends crudRepository {
    like(item) {
        console.log("Liking item:", item);
    }
}

const likes = new likeRepository();
likes.create("Post 1"); // Inherited method
likes.like("Post 1");   // Specific method

 */