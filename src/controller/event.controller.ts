import { Request, Response } from "express";
import { editEvent, getEventById, removeEvent, saveEvent, searchEvent } from "../service/event.service";

export const addEvent = async (req: Request, res: Response) => {
  try {

    const newEvent = await saveEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await editEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await removeEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    const newEvent = await getEventById(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const findandSearchEvents = async (req: Request, res: Response) => {
  try {
    const newEvent = await searchEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

