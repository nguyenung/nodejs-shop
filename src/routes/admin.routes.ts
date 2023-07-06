import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { User, Product, Category, Customer } from './../models/index.js';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const resources = [
  {
    resource: User,
    options: {
      navigation: {
        name: 'Users',
        icon: 'User',
      },
    },
  },
  {
    resource: Product,
    options: {
      navigation: {
        name: 'Products',
        icon: 'Package',
      },
    },
  },
  {
    resource: Category,
    options: {
      navigation: {
        name: 'Categories',
        icon: 'List',
      },
    },
  },
  {
    resource: Customer,
    options: {
      navigation: {
        name: 'Customers',
        icon: 'Users',
      },
    },
  },
];

const adminOptions = {
  resources,
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildRouter(admin);

export default adminRouter;
