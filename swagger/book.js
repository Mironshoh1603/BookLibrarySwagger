/**
 * @swagger
 * components:
 *  schemas:
 *    Item:
 *      type: object
 *      properties:
 *                      name:
 *                        type: string
 *                        description: Kitobni nomi(kirtish majburiy)
 *                        example: Afandini sarguzashtlari
 *                      price:
 *                        type: integer
 *                        description: Kitobni narxi(kirtish majburiy)
 *                        example: 10
 *                      author:
 *                        type: string
 *                        description: Kitobni muallifi(kirtish majburiy)
 *                        example: Paloncha Palonchayev
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       properties:
 *                status:
 *                  type: string
 *                  example: Succes
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                        description: Kitobni uuidsi(avto generate)
 *                        example: 10246b15-27f2-4ecf-8a6a-e171fa362a
 *                      name:
 *                        type: string
 *                        description: Kitobni nomi(kirtish majburiy)
 *                        example: Afandini sarguzashtlari
 *                      price:
 *                        type: integer
 *                        description: Kitobni narxi(kirtish majburiy)
 *                        example: 10
 *                      author:
 *                        type: string
 *                        description: Kitobni muallifi(kirtish majburiy)
 *                        example: Paloncha Palonchayev
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *                status:
 *                  type: string
 *                  example: Succes
 *                data:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                        description: Kitobni uuidsi(avto generate)
 *                        example: 10246b15-27f2-4ecf-8a6a-e171fa362a
 *                      name:
 *                        type: string
 *                        description: Kitobni nomi(kirtish majburiy)
 *                        example: Afandini sarguzashtlari
 *                      price:
 *                        type: integer
 *                        description: Kitobni narxi(kirtish majburiy)
 *                        example: 10
 *                      author:
 *                        type: string
 *                        description: Kitobni muallifi(kirtish majburiy)
 *                        example: Paloncha Palonchayev
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /book:
 *  get:
 *    summary: Hamma kitoblarni olib kelish
 *    description: Get All Books
 *    tags: [Books]
 *    responses:
 *      200:
 *        desription: SuccesFull get books
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Books'
 *
 *      404:
 *        description: Error
 */

/**
 * @swagger
 *  /book:
 *    post:
 *      summary: Add book Database
 *      description: Kitob qo'shish
 *      tags: [Books]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Item'
 *
 *
 *      responses:
 *        201:
 *          desription: SuccesFull get books
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Book'
 *        404:
 *          description: Error
 */

/**
 * @swagger
 *  /book/{id}:
 *    get:
 *      summary: Get One Book
 *      tags: [Books]
 *      description: Bitta Kitobni idsi bilan olish
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *      responses:
 *        201:
 *          desription: SuccesFull get books
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Book'
 *        404:
 *          description: Error
 */

/**
 * @swagger
 *  /book/{id}:
 *    patch:
 *      summary: Get One Book
 *      tags: [Books]
 *      description: Bitta Kitobni idsi bilan olish
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Item'
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *      responses:
 *        201:
 *          desription: SuccesFull get books
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Book'
 *        404:
 *          description: Error
 */

/**
 * @swagger
 *  /book/{id}:
 *    delete:
 *      summary: Delete One Book
 *      tags: [Books]
 *      description: Bitta Kitobni idsi orqali o'chirish
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *      responses:
 *        201:
 *          desription: SuccesFull get books
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    example: Succes
 *                  message:
 *                    type: string
 *                    example: Book has been delete
 *        404:
 *          description: Error
 */
