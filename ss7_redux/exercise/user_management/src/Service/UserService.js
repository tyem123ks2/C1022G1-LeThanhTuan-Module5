import request from '../http-common'

const findAllUser = () => {
   return request.get('/users')
}

const remove = (id) => {
    return request.delete('/users/{id}')
}

const userService = {
    findAllUser,
    remove,
};

export default userService;