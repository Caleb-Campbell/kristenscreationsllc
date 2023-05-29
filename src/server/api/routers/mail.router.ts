import { z } from "zod";
import { sendEmail } from "../services/mail";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mailRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({
      to: z.string(),
      subject: z.string(),
      text: z.string(),
    }))
    .mutation(async ({ input }) => {
      await sendEmail(input);
    })},

);
