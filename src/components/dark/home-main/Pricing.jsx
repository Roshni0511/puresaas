import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Margin } from "@mui/icons-material";
export default function Pricing() {
  return (
    <div style={{paddingBottom:'100px'}} >
      <div className="container">
      <div style={{ paddingBottom: "40px" }}>
        <h4
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "15px",
          }}
        >
          SELECT BEST PLAN
        </h4>
        <h3
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "15px",
          }}
        >
          Unbeatable prices, simple.
        </h3>
        <p style={{ justifyContent: "center", display: "flex" }}>
          Your Path To Success Starts Here: Affordable Plans Tailored Just For
          You. Discover The Perfect Fit And Value With Our Range Of Pricing
          Options.
        </p>
      </div>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", // Auto-fill with min width of 300px and flexible columns
          gap: 2,

          gridTemplateRows: "auto", // Allow rows to adjust based on content
        }}
      >
        {/* Card 1 */}
        <Card
          size="lg"
          variant="outlined"
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <h6 style={{ margin: "0px", fontWeight: "500", color: "#fff" }}>
            individual
          </h6>
          <Typography level="h2" style={{ Margin: "0px", color: "#fff" }}>
            ₹ 2999
          </Typography>
          <span style={{ color: "#fff", fontWeight: "700" }}>Per month</span>

          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Today Work
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Vexillologist pitchfork
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Basic report
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Leads
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Property Management
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Notification
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Partial Property
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Theme Setting
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Whatsapp Integration
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Marketing (Add on)
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Screenshot & Screen Recording
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Master setting
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
    3.990€{' '}
    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
      / month
    </Typography>
  </Typography> */}
            <Button
              variant="soft"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                marginBottom: "10px",
              }}
              endDecorator={<KeyboardArrowRight />}
            >
              Buy now
            </Button>
          </CardActions>
          <span
            style={{ color: "#fff", fontWeight: "500", paddingBottom: "20px" }}
          >
            Contact To sales Person
          </span>
        </Card>

        {/* Card 2 */}
        <Card
          size="lg"
          variant="outlined"
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <h6 style={{ margin: "0px", fontWeight: "500", color: "#fff" }}>
            Enterprise
          </h6>
          <Typography level="h2" style={{ Margin: "0px", color: "#fff" }}>
            ₹ 4999
          </Typography>
          <span style={{ color: "#fff", fontWeight: "700" }}>Per month</span>
          <div>
            <button style={{ padding: "5px 10px", borderRadius: "25px" }}>
              Business + Enterprise
            </button>
          </div>
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Multi Business
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Multi report
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Internal Chat
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Property Map
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Account
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Third Party Integration/leads
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Marketing
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Workflow
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Call Recording
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Whatsapp Integration
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Mobile Application
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
    3.990€{' '}
    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
      / month
    </Typography>
  </Typography> */}
            <Button
              variant="soft"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                marginBottom: "10px",
              }}
              endDecorator={<KeyboardArrowRight />}
            >
              Buy now
            </Button>
          </CardActions>
          <span
            style={{ color: "#fff", fontWeight: "500", paddingBottom: "20px" }}
          >
            Contact To sales Person
          </span>
        </Card>

        {/* Card 3 */}
        <Card
          size="lg"
          variant="outlined"
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <h6 style={{ margin: "0px", fontWeight: "500", color: "#fff" }}>
            Business
          </h6>
          <Typography level="h2" style={{ Margin: "0px", color: "#fff" }}>
            ₹ 3999
          </Typography>
          <span style={{ color: "#fff", fontWeight: "700" }}>Per month</span>
          <div>
            <button style={{ padding: "5px 10px", borderRadius: "25px" }}>
              Business + Enterprise
            </button>
          </div>
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Branch Setting
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Selected Report
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Full Property
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Inventory
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Call logs
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              My Task
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Lead Reminder
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Property work
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Whatsapp Integration
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Property live status
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Property Web
            </ListItem>
            <ListItem sx={{ color: "#fff" }}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Mobile Application
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
    3.990€{' '}
    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
      / month
    </Typography>
  </Typography> */}
            <Button
              variant="soft"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                marginBottom: "10px",
              }}
              endDecorator={<KeyboardArrowRight />}
            >
              Buy now
            </Button>
          </CardActions>
          <span
            style={{ color: "#fff", fontWeight: "500", paddingBottom: "20px" }}
          >
            Contact To sales Person
          </span>
        </Card>
      </Box>
      </div>
    </div>
  );
}
