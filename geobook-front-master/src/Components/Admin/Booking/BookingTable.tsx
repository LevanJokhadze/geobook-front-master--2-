import { Fragment, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import type { SchedulerRef } from "@aldabil/react-scheduler/types";
import { RESOURCES, EVENTS } from "./data";
import georgianTranslations from "./Translations";


export const BookingTable = () => {
  const [mode, setMode] = useState<"default" | "tabs">("default");
  const calendarRef = useRef<SchedulerRef>(null);
    console.log(calendarRef )
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <span>ხედვის არე: </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("default");
            calendarRef.current?.scheduler?.handleState(
              "default",
              "resourceViewMode"
            );
          }}
        >
          Default
        </Button>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("tabs");
            calendarRef.current?.scheduler?.handleState(
              "tabs",
              "resourceViewMode"
            );
          }}
        >
          Tabs
        </Button>
      </div>
      <form action=""></form>
      <Scheduler
        view={"day"}
        dialogMaxWidth={'sm'}
        month={null}
        week={null}
        translations={georgianTranslations}
        ref={calendarRef}
        events={EVENTS}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          colorField: "color",
          avatarField: "", 
        }}
        hourFormat={"24"}
        day={{startHour: 9, 
          endHour: 22,
          step: 30,
        }}
        fields={[
          {
            name: "admin_id",
            type: "select",
            default: RESOURCES[0].admin_id,
            options: RESOURCES.map((res) => {
              return {
                id: res.admin_id,
                text: `${res.title}`,
                value: res.admin_id, //Should match "name" property
              };
            }),
            config: { label: "მაგიდა", required: true},
          },
        ]}
        viewerExtraComponent={(fields: any) => {
          return (
            <div>
              {fields.map((field: any, i: any) => {
                if (field.name === "admin_id") {
                  return (
                    <Typography
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                      color="textSecondary"
                      variant="caption"
                      noWrap
                    >
                    </Typography>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          );
        }}
      />
    </Fragment>
  );
};
