import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Arthur',
    email: 'Arthur@mail.com',
    posts: {
      create: [
        {
          title: 'sinal 1',
          content: 'teste',
          published: true,
        },
      ],
    },
  },
  {
    name: 'João',
    email: 'joao@mail.com',
    posts: {
      create: [
        {
          title: 'sinal 2',
          content: 'hello teste',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Matheus',
    email: 'matheus@mail.com',
    posts: {
      create: [
        {
          title: 'sinal 3',
          content: 'hello hello',
          published: true,
        },
        {
          title: 'sinal 4',
          content: 'teste hello',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
