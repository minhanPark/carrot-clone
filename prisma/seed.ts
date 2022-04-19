import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  Array.from({ length: 100 }, (v, i) => i).forEach(async (item) => {
    await client.stream.create({
      data: {
        name: String(item + 1),
        description: String(item + 1),
        price: item + 1,
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log(`${item + 1}/100`);
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
