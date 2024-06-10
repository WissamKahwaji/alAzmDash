import { useState } from "react";
import { Params } from "./type";
import { useParams } from "react-router-dom";
import {
  useEditPropertyMutation,
  useGetPropertiesInfoByIdQuery,
} from "../../apis/properties/queries";
import LoadingPage from "../loading-page/LoadingPage";
import { AddPropertyProps } from "../../apis/properties/type";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LoadingButton from "../../components/items/buttons/loadingButtons/LoadingButton";

const EditPropertyPage = () => {
  const theme = useTheme();
  const { id } = useParams<Params>();
  const {
    data: property,
    isLoading,
    isFetching,
    isError,
  } = useGetPropertiesInfoByIdQuery(id);
  const { mutate: editPropertyInfo } = useEditPropertyMutation();
  const [imgProperty, setImgProperty] = useState(property?.img ?? "");
  const [coverImgProperty, setCoverImgProperty] = useState(
    property?.coverImg ?? ""
  );

  if (isLoading && isFetching) return <LoadingPage />;
  if (isError) return <></>;
  const initialValues: AddPropertyProps = {
    ...(id && { _id: id }),
    name: property?.name ?? "",
    bio: property?.bio ?? "",
    description: property?.description ?? "",
    location: property?.location ?? "",
    price: property?.price ?? 0,
    propertyContent: property?.propertyContent ?? [],
    img: null,
    coverImg: null,
    gallery: null,
    breifDetails: property?.breifDetails ?? [
      {
        title: "",
        value: "",
      },
    ],
    locationDetails: property?.locationDetails ?? "",
    connectivity: property?.connectivity ?? [
      {
        title: "",
        value: "",
      },
    ],
    paymentPlan: property?.paymentPlan ?? [{ title: "", value: "" }],
    floorPlan: property?.floorPlan ?? "",
    masterPlan: property?.masterPlan ?? "",
  };

  const handleSubmit = (
    values: AddPropertyProps,
    { setSubmitting }: FormikHelpers<AddPropertyProps>
  ) => {
    editPropertyInfo(values, {
      onSettled() {
        setSubmitting(false);
      },
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
        }}
      >
        Add Property
      </Typography>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          setFieldValue,
        }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button variant="contained" component="label">
                  Upload Property Image
                  <input
                    type="file"
                    hidden
                    onChange={event => {
                      if (event.currentTarget.files) {
                        setFieldValue("img", event.currentTarget.files[0]);
                        const imgSrc = URL.createObjectURL(
                          event.currentTarget.files[0]
                        );
                        setImgProperty(imgSrc);
                      }
                    }}
                  />
                </Button>
                <Box
                  component="img"
                  src={imgProperty}
                  sx={{
                    height: 233,
                    width: 350,
                    marginLeft: 2,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" component="label">
                  Upload Cover Image
                  <input
                    type="file"
                    hidden
                    onChange={event => {
                      if (event.currentTarget.files) {
                        setFieldValue("coverImg", event.currentTarget.files[0]);
                        const imgSrc = URL.createObjectURL(
                          event.currentTarget.files[0]
                        );
                        setCoverImgProperty(imgSrc);
                      }
                    }}
                  />
                </Button>
                <Box
                  component="img"
                  src={coverImgProperty}
                  sx={{
                    height: 233,
                    width: 350,
                    marginLeft: 2,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  fullWidth
                  label="Property Name"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="bio"
                  fullWidth
                  label="Property Bio"
                  multiline
                  minRows={3}
                  value={values.bio}
                  onChange={handleChange}
                  error={touched.bio && !!errors.bio}
                  helperText={touched.bio && errors.bio}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="description"
                  fullWidth
                  label="Property description"
                  multiline
                  minRows={3}
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="location"
                  fullWidth
                  label="Property location"
                  value={values.location}
                  onChange={handleChange}
                  error={touched.location && !!errors.location}
                  helperText={touched.location && errors.location}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="price"
                  fullWidth
                  label="Price"
                  type="number"
                  value={values.price}
                  onChange={handleChange}
                  error={touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{
                  p: 3,
                }}
              >
                {/* <Grid item xs={12} md={6}>
              <TextField
                name="paymentPlan"
                fullWidth
                label="paymentPlan of property"
                multiline
                minRows={1}
                value={values.paymentPlan}
                onChange={handleChange}
                error={touched.paymentPlan && !!errors.paymentPlan}
                helperText={touched.paymentPlan && errors.paymentPlan}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                  },
                }}
              />
            </Grid> */}
                <Grid item xs={12} md={6}>
                  <TextField
                    name="floorPlan"
                    fullWidth
                    label="floor Plan of property"
                    multiline
                    minRows={1}
                    value={values.floorPlan}
                    onChange={handleChange}
                    error={touched.floorPlan && !!errors.floorPlan}
                    helperText={touched.floorPlan && errors.floorPlan}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="masterPlan"
                    fullWidth
                    label="master Plan of property"
                    multiline
                    minRows={1}
                    value={values.masterPlan}
                    onChange={handleChange}
                    error={touched.masterPlan && !!errors.masterPlan}
                    helperText={touched.masterPlan && errors.masterPlan}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="locationDetails"
                    fullWidth
                    label="location Details "
                    multiline
                    minRows={1}
                    value={values.locationDetails}
                    onChange={handleChange}
                    error={touched.locationDetails && !!errors.locationDetails}
                    helperText={
                      touched.locationDetails && errors.locationDetails
                    }
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 3,
                  }}
                >
                  Payment Plan
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    padding: 2,
                    marginBottom: 2,
                  }}
                >
                  <Grid item xs={12}>
                    <FieldArray name="paymentPlan">
                      {({ push, remove }) => (
                        <>
                          {values.paymentPlan.map(
                            (
                              item: { title: string; value: string },
                              index: number
                            ) => (
                              <Box
                                key={index}
                                sx={{
                                  border: `1px solid ${theme.palette.primary.main}`,
                                  padding: 2,
                                  marginBottom: 2,
                                }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={12} md={4}>
                                    <TextField
                                      fullWidth
                                      name={`paymentPlan.${index}.title`}
                                      label="Title"
                                      value={item.title}
                                      onChange={e =>
                                        setFieldValue(
                                          `paymentPlan.${index}.title`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={7}>
                                    <TextField
                                      fullWidth
                                      multiline
                                      name={`paymentPlan.${index}.value`}
                                      label="Value"
                                      value={item.value}
                                      onChange={e =>
                                        setFieldValue(
                                          `paymentPlan.${index}.value`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={1}>
                                    <IconButton
                                      sx={{ color: "red" }}
                                      onClick={() => remove(index)}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Box>
                            )
                          )}
                          <Button
                            variant="contained"
                            onClick={() => push({ title: "", value: "" })}
                          >
                            Add Content
                          </Button>
                        </>
                      )}
                    </FieldArray>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 3,
                  }}
                >
                  Property Connectivity
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    padding: 2,
                    marginBottom: 2,
                  }}
                >
                  <Grid item xs={12}>
                    <FieldArray name="connectivity">
                      {({ push, remove }) => (
                        <>
                          {values.connectivity.map(
                            (
                              item: { title: string; value: string },
                              index: number
                            ) => (
                              <Box
                                key={index}
                                sx={{
                                  border: `1px solid ${theme.palette.primary.main}`,
                                  padding: 2,
                                  marginBottom: 2,
                                }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={12} md={4}>
                                    <TextField
                                      fullWidth
                                      name={`connectivity.${index}.title`}
                                      label="Title"
                                      value={item.title}
                                      onChange={e =>
                                        setFieldValue(
                                          `connectivity.${index}.title`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={7}>
                                    <TextField
                                      fullWidth
                                      multiline
                                      name={`connectivity.${index}.value`}
                                      label="Value"
                                      value={item.value}
                                      onChange={e =>
                                        setFieldValue(
                                          `connectivity.${index}.value`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={1}>
                                    <IconButton
                                      sx={{ color: "red" }}
                                      onClick={() => remove(index)}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Box>
                            )
                          )}
                          <Button
                            variant="contained"
                            onClick={() => push({ title: "", value: "" })}
                          >
                            Add Content
                          </Button>
                        </>
                      )}
                    </FieldArray>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload Gallery Images
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={event => {
                      if (event.currentTarget.files) {
                        setFieldValue(
                          "gallery",
                          Array.from(event.currentTarget.files)
                        );
                      }
                    }}
                  />
                </Button>
                {values.gallery && values.gallery.length > 0 && (
                  <Typography>
                    {values.gallery.length} images selected
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 3,
                  }}
                >
                  Property Content
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="propertyContent">
                  {({ push, remove }) => (
                    <>
                      {values.propertyContent.map((content, index) => (
                        <Box
                          key={index}
                          sx={{
                            border: `1px solid ${theme.palette.primary.main}`,
                            padding: 2,
                            marginBottom: 2,
                          }}
                        >
                          {/* <TextField
                            fullWidth
                            name={`propertyContent.${index}.description`}
                            label="Content Description"
                            value={content.description}
                            onChange={handleChange}
                          /> */}
                          <FieldArray name={`propertyContent.${index}.details`}>
                            {({ push, remove }) => (
                              <>
                                {content.details.map((detail, detailIndex) => (
                                  <Box
                                    key={detailIndex}
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mb: 2,
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      name={`propertyContent.${index}.details.${detailIndex}.title`}
                                      label="Detail Title"
                                      value={detail.title}
                                      onChange={handleChange}
                                    />
                                    <IconButton
                                      aria-label="delete"
                                      color="primary"
                                      onClick={() => remove(detailIndex)}
                                      sx={{ ml: 2 }}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Box>
                                ))}
                                <Button
                                  variant="outlined"
                                  onClick={() => push({ title: "" })}
                                >
                                  Add Detail
                                </Button>
                              </>
                            )}
                          </FieldArray>
                          <FieldArray name={`propertyContent.${index}.imgs`}>
                            {({ form }) => (
                              <>
                                <Button variant="contained" component="label">
                                  Upload Images
                                  <input
                                    type="file"
                                    hidden
                                    multiple
                                    onChange={event => {
                                      if (event.currentTarget.files) {
                                        const files = Array.from(
                                          event.currentTarget.files
                                        );
                                        const existingFiles =
                                          form.values.propertyContent[index]
                                            .imgs || [];
                                        const updatedFiles =
                                          existingFiles.concat(files);
                                        form.setFieldValue(
                                          `propertyContentImgs`,
                                          updatedFiles
                                        );
                                      }
                                    }}
                                  />
                                </Button>
                                {form.values.propertyContent[index].imgs &&
                                  form.values.propertyContent[index].imgs
                                    .length > 0 && (
                                    <Box>
                                      {form.values.propertyContent[
                                        index
                                      ].imgs.map(
                                        (file: File, imgIndex: number) => (
                                          <Box
                                            key={imgIndex}
                                            sx={{
                                              display: "flex",
                                              alignItems: "center",
                                              mb: 2,
                                            }}
                                          >
                                            <Typography>{file.name}</Typography>
                                            {/* <IconButton
                                              aria-label="delete"
                                              color="primary"
                                              onClick={() => {
                                                const updatedFiles =
                                                  form.values.propertyContent[
                                                    index
                                                  ].imgs.filter(
                                                    (
                                                      _: undefined,
                                                      idx: number
                                                    ) => idx !== imgIndex
                                                  );
                                                form.setFieldValue(
                                                  `propertyContent.${index}.imgs`,
                                                  updatedFiles
                                                );
                                              }}
                                              sx={{ ml: 2 }}
                                            >
                                              <DeleteIcon />
                                            </IconButton> */}
                                          </Box>
                                        )
                                      )}
                                    </Box>
                                  )}
                              </>
                            )}
                          </FieldArray>
                          <IconButton
                            aria-label="delete"
                            color="primary"
                            onClick={() => remove(index)}
                            sx={{ mt: 2 }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          push({
                            description: "",
                            details: [{ title: "" }],
                            imgs: [],
                          })
                        }
                      >
                        Add Property Content
                      </Button>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent={"center"}>
                  <LoadingButton
                    isSubmitting={isSubmitting}
                    buttonText={"submit"}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EditPropertyPage;
