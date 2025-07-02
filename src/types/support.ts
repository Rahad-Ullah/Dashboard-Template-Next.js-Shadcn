import { ticketPriorities, ticketStatuses } from "@/constants/support";

export type TicketPriority = (typeof ticketPriorities)[number];
export type TicketStatus = (typeof ticketStatuses)[number];

export interface ISupportTicket {
  _id: number;
  user: string;
  subject: string;
  message: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
}
