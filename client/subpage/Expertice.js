import React from "react";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import ResImage from "../../docs/assets/images/Residential.jpg";


import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Expertice = () => {
  return (
    <div
      className="h-auto flex flex-col justify-center items-start overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="flex flex-col items-start mt-20 mb-10 mx-14 text-priblue">
        <h1 className="font-bold text-2xl mb-6 items-center">
          Service Area We Specilized
        </h1>
        <h2 className="text-priblue">
          At DEYI, we specialize in six core areas of expertise to meet all your
          construction and development needs. Our services include residential
          Structural Design, ensuring your homes are not just beautiful but also
          structurally sound and safe. We excel in Permit Application services,
          navigating the complex regulatory landscape to obtain the necessary
          approvals for your projects seamlessly. Our Landscape Detail
          Structural Design brings outdoor spaces to life with innovative and
          sustainable solutions. For playgrounds that inspire creativity and
          safety, our Playground Structural Design services are second to none.
          We offer expert Construction Administration, overseeing every aspect
          of your project to ensure timely completion and compliance. Finally,
          our Title 24 services focus on energy efficiency and environmental
          sustainability, aligning your projects with the latest standards.
          Partner with DEYI Consultants for unparalleled expertise and a
          commitment to excellence in every project we undertake.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="h-96 my-8 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Residential Structural Design
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ maxWidth: "100%", overflowWrap: "break-word" }}
              >
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="flex flex-row">
            <Button size="small" className="text-priblue">
              Detail
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className="h-96 my-8 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Permit Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Permit Application services encompass a crucial aspect of
                construction and development projects, ensuring compliance with
                regulatory standards and legal requirements. Specifically, these
                services are instrumental for various project types such as
                Accessory Dwelling Units (ADUs), additions, and remodels.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="text-priblue">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className="h-96 my-8 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Landscape Detail Structural Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="text-priblue">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className="h-96 my-8 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Playground Structural Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="text-priblue">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className="h-96 mt-8 mb-28 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Construction Administration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="text-priblue">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className="h-96 mt-8 mb-28 mx-14 items-center">
          <CardActionArea>
            <CardMedia
              className="h-48 w-auto m-2 pt-10"
              image={ResImage}
              title="Expertise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title 24
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ maxWidth: "100%", overflowWrap: "break-word" }}
              >
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="flex flex-row">
            <Button size="small" className="text-priblue">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Expertice;
