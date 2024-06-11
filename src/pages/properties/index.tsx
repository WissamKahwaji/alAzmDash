import { useGetPropertiesInfoQuery } from "../../apis/properties/queries";
import { Box, Grid, Typography } from "@mui/material";
import PropertyCard from "../../components/items/cards/property";

const PropertiesPage = () => {
  const {
    data: propertyInfo,
    isError,
    isLoading,
  } = useGetPropertiesInfoQuery();

  if (isError) return <div></div>;
  if (isLoading) return <div>Loading........</div>;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
          color: "black",
        }}
      >
        Properties
      </Typography>

      <Grid container gap={4}>
        {propertyInfo &&
          propertyInfo.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box p={1}>
                <PropertyCard property={property} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PropertiesPage;
