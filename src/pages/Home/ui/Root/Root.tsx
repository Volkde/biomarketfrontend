import { Box, Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCard } from "components/ProductCard/ui/Root";
import { useTranslation } from "react-i18next";
import { Banner } from "../Banner";
import { Card } from "../Card";

function Root() {
  const { t } = useTranslation("page-home");

  return (
    <Box sx={{ bgcolor: "#f8f8f8", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <Breadcrumbs />
        <Banner />

        {/* Popular Categories */}
        <Box component="section" sx={{ my: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {t("popularCategories")}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            {t("categoriesSubtitle")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)"
              },
              gap: 3
            }}
          >
            {[1, 2, 3, 4].map(i => (
              <Card key={i} title={`${t("category")} ${i}`} />
            ))}
          </Box>
        </Box>

        {/* Hot Deals */}
        <Box component="section" sx={{ my: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            {t("hotDeals")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)"
              },
              gap: 3
            }}
          >
            {[
              {
                id: 1,
                title: "Яблоки",
                description: "Вкусные, сочные, разнообразные",
                image: "/images/product1.jpg",
                price: 10.99,
                oldPrice: 14.99,
                discounted: 25,
                inStock: true,
                categoryId: 1,
                sellerId: 1,
                rating: 4.5
              },
              {
                id: 2,
                title: "Груши",
                description: "Спелые, сладкие, ароматные",
                image: "/images/product2.jpg",
                price: 5.99,
                discounted: 10,
                inStock: true,
                categoryId: 2,
                sellerId: 2,
                rating: 4.0
              },
              {
                id: 3,
                title: "Дыни",
                description: "Желтые и сладкие",
                image: "/images/product3.jpg",
                price: 20.0,
                oldPrice: 25.0,
                discounted: 20,
                inStock: false,
                categoryId: 3,
                sellerId: 3,
                rating: 4.8
              }
            ].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>

        {/* Testimonials */}
        <Box component="section" sx={{ my: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            {t("testimonials")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)"
              },
              gap: 4
            }}
          >
            {[1, 2, 3].map(i => (
              <Box key={i}>
                <Card title={`User ${i}`}>
                  <Typography variant="body2" fontStyle="italic">
                    “Lorem ipsum dolor sit amet, consectetur.”
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* From the Blog */}
        <Box component="section" sx={{ my: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            {t("fromTheBlog")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)"
              },
              gap: 3
            }}
          >
            {[1, 2, 3].map(i => (
              <Box key={i}>
                <Card
                  title={`Blog Post ${i}`}
                  description="Short preview of the blog content..."
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Root;
