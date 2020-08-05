jest.mock("../services/userServices", () => 
    jest.requireActual("../services/_mock_/userServices")
)
const userController = require('../controllers/userController')

describe('User test group', ()=>{
    describe('Create User',() => {
        it('Create', async () => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }
            const req = {
                body: {
                    name: "Juan",
                    last_name: "Perez",
                    email: "pep3@gmail.com",
                    password: "123456",
                    phone_number: 445343554
                }
            }
            await userController.createUser(req,res)
            expect(res.status.mock.calls).toEqual([[201]])
            expect(res.send.mock.calls).toEqual([[
                {user: expect.objectContaining({is_active: true})}
            ]])
        })
        
    })

    describe('Get Users', () => {
        it('Get Users', async () => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }
            const req = {}
            await userController.getUsers(req,res)
            expect(res.status.mock.calls).toEqual([[200]])
            expect(res.send.mock.calls).toEqual([
                [{users: [expect.objectContaining({is_active: true})]}]
            ])
        })
    })
})