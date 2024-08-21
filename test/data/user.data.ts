import { faker } from "@faker-js/faker";

export const user = {
  nama: faker.person.firstName(),
  email: `${faker.person.lastName() + faker.number.int({ min: 10, max: 100 })}@gmail.com`,
  phone: -8576878987,
  company: faker.company.name(),
  question: faker.lorem.paragraphs(5),
};
