# How to manage classes

Angular provides the opportunity to develop code in modular fashion. That means all the components are combined at the end to make the app view.

All components classes are Typescript files.

If you want to make something accessible in another file (module), you can export that particular class or property.

```typescript
// ./shared/comment.ts
export class Comment {  // This file exports Comment class.
  rating: number;
  comment: string;
  author: string;
  date: string;
}
```

- The exported class can be imported using:

```typescript
import { Comment } from './comment';
```

Typescript allows compilation of code. So, if the file is not found or if it doesn't exist. Typescript will give error before running the code. That's the advantage of Typescript.

```typescript
// ./shared/dish.ts
import {Comment} from './comment';

export class Dish {
  name: string;
  image: string;
  category: string;
  ... ... ...
  comments: Comment[];
}
// This file exports Dish class
```

You can also export data objects.

```typescript
import { Dish } from './dish';

export class DISHES: Dish[] = [
  {
    ... ... // dish1
  },
  {
    .. ... // dish 2
  }
];
```
