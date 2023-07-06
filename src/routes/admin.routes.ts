import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose';
import User from './../models/User.model.js'


AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

const usersNavigation = {
    name: 'Users',
    icon: 'User',
}

const adminOptions = {
    // We pass Category to `resources`
    resources: [{
        resource: User,
        options: {
            navigation: usersNavigation,
        },
    }],
}
const admin = new AdminJS(adminOptions)

const adminRouter = AdminJSExpress.buildRouter(admin)

export default adminRouter;
