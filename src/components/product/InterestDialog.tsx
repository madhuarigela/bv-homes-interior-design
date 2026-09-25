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
}

const InterestDialog = ({
  productName,
}: InterestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", budget: "", timeline: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const message =
      `🏠 *BV Homes — Product Inquiry*%0A%0A` +
      `*Product:* ${encodeURIComponent(productName)}%0A` +
      `*Price:* Please share the current price.%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Budget: ${encodeURIComponent(form.budget || "Not specified")}%0A` +
      `Timeline: ${encodeURIComponent(form.timeline || "Not specified")}`;

    window.open(`https://wa.me/917702702888?text=${message}`, "_blank");

    toast.success("Inquiry sent to BVHome Furnitures on WhatsApp.");
    setForm({ name: "", phone: "", budget: "", timeline: "" });
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 h-12 border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-wider uppercase text-sm">
          <HandHeart className="w-4 h-4" />
          I'm Interested
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Interested in {productName}?</DialogTitle>
          <DialogDescription>Fill in your details and we'll contact you on WhatsApp.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="interest-name">Name *</Label>
            <Input id="interest-name" placeholder="Your full name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-phone">Phone (with country code) *</Label>
            <Input id="interest-phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-budget">Budget Preference</Label>
            <Select value={form.budget} onValueChange={(v) => handleChange("budget", v)}>
              <SelectTrigger id="interest-budget"><SelectValue placeholder="Select preference" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="flexible">Flexible</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="not-sure">Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-timeline">Purchase Timeline</Label>
            <Select value={form.timeline} onValueChange={(v) => handleChange("timeline", v)}>
              <SelectTrigger id="interest-timeline"><SelectValue placeholder="When do you need it?" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1-2-weeks">1–2 weeks</SelectItem>
                <SelectItem value="1-month">Within a month</SelectItem>
                <SelectItem value="2-3-months">2–3 months</SelectItem>
                <SelectItem value="just-browsing">Just browsing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={submitting} className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground tracking-wider uppercase text-sm">
            {submitting ? "Submitting…" : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
