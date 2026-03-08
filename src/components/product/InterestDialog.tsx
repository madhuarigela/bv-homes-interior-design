import { useState } from "react";
import { HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface InterestDialogProps {
  productName: string;
  productPrice: number;
  adminPhone?: string; // WhatsApp number with country code, e.g. "1234567890"
  adminEmail?: string;
}

const InterestDialog = ({
  productName,
  productPrice,
  adminPhone = "1234567890",
  adminEmail = "admin@bvhomes.com",
}: InterestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const message = `🏠 *BV Homes — Product Inquiry*%0A%0A` +
      `*Product:* ${encodeURIComponent(productName)}%0A` +
      `*Price:* $${productPrice.toLocaleString()}%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Budget: ${encodeURIComponent(form.budget || "Not specified")}%0A` +
      `Timeline: ${encodeURIComponent(form.timeline || "Not specified")}`;

    // Send WhatsApp to admin
    window.open(
      `https://wa.me/${adminPhone}?text=${message}`,
      "_blank"
    );

    // Send email to admin
    const emailSubject = encodeURIComponent(`BV Homes Inquiry: ${productName}`);
    const emailBody = encodeURIComponent(
      `Product Inquiry — BV Homes\n\n` +
      `Product: ${productName}\n` +
      `Price: $${productPrice.toLocaleString()}\n\n` +
      `Customer Details\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Budget: ${form.budget || "Not specified"}\n` +
      `Timeline: ${form.timeline || "Not specified"}`
    );
    window.open(`mailto:${adminEmail}?subject=${emailSubject}&body=${emailBody}`, "_blank");

    // Acknowledgement to user via WhatsApp
    const ackMessage = `Hi ${encodeURIComponent(form.name)}! 👋%0A%0A` +
      `Thank you for your interest in *${encodeURIComponent(productName)}* from BV Homes.%0A` +
      `Our team will reach out to you shortly.%0A%0A` +
      `— BV Homes Team`;
    window.open(`https://wa.me/${encodeURIComponent(form.phone)}?text=${ackMessage}`, "_blank");

    // Acknowledgement to user via email
    const userEmailSubject = encodeURIComponent(`Your BV Homes Inquiry: ${productName}`);
    const userEmailBody = encodeURIComponent(
      `Hi ${form.name},\n\n` +
      `Thank you for your interest in "${productName}" ($${productPrice.toLocaleString()}).\n\n` +
      `We've received your inquiry and our team will get back to you shortly.\n\n` +
      `Best regards,\nBV Homes Team`
    );
    window.open(`mailto:${form.email}?subject=${userEmailSubject}&body=${userEmailBody}`, "_blank");

    toast.success("Inquiry submitted! Check your WhatsApp and email.");
    setForm({ name: "", email: "", phone: "", budget: "", timeline: "" });
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 h-12 border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-wider uppercase text-sm"
        >
          <HandHeart className="w-4 h-4" />
          I'm Interested
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Interested in {productName}?</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you via WhatsApp & Email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="interest-name">Name *</Label>
            <Input
              id="interest-name"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-email">Email *</Label>
            <Input
              id="interest-email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-phone">Phone (with country code) *</Label>
            <Input
              id="interest-phone"
              type="tel"
              placeholder="+1 234 567 8900"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-budget">Budget Range</Label>
            <Select value={form.budget} onValueChange={(v) => handleChange("budget", v)}>
              <SelectTrigger id="interest-budget">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1000">Under $1,000</SelectItem>
                <SelectItem value="1000-3000">$1,000 – $3,000</SelectItem>
                <SelectItem value="3000-5000">$3,000 – $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 – $10,000</SelectItem>
                <SelectItem value="over-10000">Over $10,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-timeline">Purchase Timeline</Label>
            <Select value={form.timeline} onValueChange={(v) => handleChange("timeline", v)}>
              <SelectTrigger id="interest-timeline">
                <SelectValue placeholder="When do you need it?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1-2-weeks">1–2 weeks</SelectItem>
                <SelectItem value="1-month">Within a month</SelectItem>
                <SelectItem value="2-3-months">2–3 months</SelectItem>
                <SelectItem value="just-browsing">Just browsing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground tracking-wider uppercase text-sm"
          >
            {submitting ? "Submitting…" : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
