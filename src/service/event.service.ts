import Event from "../modelss/event";
import { Router, Request, Response } from "express";

export const saveEvent = async (req: Request, res: Response) => {
  try {
    const { eventName, eventDate, organizer, email, phone, location } =
      req.body;

    const newEvent = await Event.create({
      eventName,
      eventDate,
      organizer,
      email,
      phone,
      location,
    });
    res.status(201).json({ data: newEvent, message: 'Event added successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEvent) {
      res.status(201).json({ data: updatedEvent, message: "Event updated successfully!" });
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json("something went wrong");
  }
};

export const removeEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (deletedEvent) {
      res.status(201).send({ message: 'Event removed successfully!' });
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json("something went wrong");
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.status(201).json({ data: event, message: 'Data fetch by id successfully!' });
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json("something went wrong");
  }
};

export const searchEvent = async (req: Request, res: Response) => {
  try {
    const { eventName, organizer, date } = req.query;
    let filter: any = {};

    if (eventName) {
      filter.eventName = new RegExp(eventName as string, "i");
    }

    if (organizer) {
      filter.organizer = new RegExp(organizer as string, "i");
    }

    if (date) {
      filter.eventDate = new Date(date as string);
    }

    const events = await Event.find(filter);

    res.status(201).json({ data: events, message: 'Data fetch by filter successfully!' });
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
