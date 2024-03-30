import { ChevronLeft } from "lucide-react";
import Link from "next/link";
export default function Ads() {
  return (
    <div>
      <h1 className="flex justify-end font-semibold pr-4">
        اختر القسم المناسب لإضافة الإعلان
      </h1>
      <Link href="/Yachts" className="flex justify-between rounded-xl p-4 m-3 border-y-neutral-600 border-x-neutral-600 border-2 font-semibold">
        <div>
          <ChevronLeft />
        </div>
        <div>قوارب - يخوت</div>
      </Link>
      <Link href="/Car-Plate-Numbers" className="flex justify-between rounded-xl p-4 m-3 border-y-neutral-600 border-x-neutral-600 border-2 font-semibold">
        <div>
          <ChevronLeft />
        </div>
        <div>أرقام لوحات السيارات</div>
      </Link>
      <Link href="/Wheels-Rims" className="flex justify-between rounded-xl p-4 m-3 border-y-neutral-600 border-x-neutral-600 border-2 font-semibold">
        <div>
          <ChevronLeft />
        </div>
        <div>عجلات - حافات</div>
      </Link>
      <Link href="/Cars" className="flex justify-between rounded-xl p-4 m-3 border-y-neutral-600 border-x-neutral-600 border-2 font-semibold">
        <div>
          <ChevronLeft />
        </div>
        <div>قطع غيار السيارات</div>
      </Link>
      <Link href="/Trucks" className="flex justify-between rounded-xl p-4 m-3 border-y-neutral-600 border-x-neutral-600 border-2 font-semibold">
        <div>
          <ChevronLeft />
        </div>
        <div>الشاحنات والمقطورات</div>
      </Link>
    </div>
  );
}
