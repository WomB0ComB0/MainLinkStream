import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResourceCard = ({ id,
  name,
  link,
  type,
  sourceSVG,
  description,
  featured, }: Data) => (
  <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
    <a href={link} target="_blank" rel="noreferrer">
      <CardHeader className="flex-center flex-col gap-2.5 !p-0">
        <div className="w-full h-fit">
          <img src={image} className="object-cover h-full rounded-md" width={384} height={440} alt={name} />
        </div>
        <CardTitle className="w-full text-left text-white paragraph-semibold line-clamp-1">{name}</CardTitle>
      </CardHeader>
    </a>
    <CardContent className="p-0 mt-4 flex-between">
      <div className="flex-center body-medium gap-1.5 text-white">
        <img src="/downloads.svg" width={20} height={20} alt="download" />
        {downloadNumber}
      </div>
      <a
        href={downloadLink}
        target="_blank"
        className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        rel="noreferrer"
      >
        Download Now
        <img src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
      </a>
    </CardContent>
  </Card>
);

export default ResourceCard;
