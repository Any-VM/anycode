import { withAuth } from "next-auth/middleware";
import config from "@/auth.config";
export default withAuth({
  pages: {
    ...config.pages,
  },
});
