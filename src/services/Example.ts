import { client } from "../imports";
import { example } from "../interfaces";

class Example {
  /**
   * @note -- In this direction, we will work with databases as a service, now we will insert an example data
   **/

  create = async (data: example) => {
    return client.example.create({
      data: {
        name: data.name,
      },
    });
  };
}

export const exampleService = new Example();
