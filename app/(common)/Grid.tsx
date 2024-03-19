import Image, { StaticImageData } from 'next/image'

export interface GridItem {
  title: string
  image?: StaticImageData
}

interface GridProps {
  items: GridItem[]
}

export default function Grid({ items }: GridProps) {
  return (
    <div className="grid container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {items.map((item: GridItem) => (
          <div
            className="grid-item sm:opacity-85 sm:hover:opacity-100"
            key={item.title}
          >
            <div className="p-4 border border-stone-900 bg-white rounded-md shadow-sm">
              {item.image && (
                <Image
                  className="mx-auto mb-2 object-scale-down w-24 h-24"
                  src={item.image}
                  alt={item.title}
                  priority
                />
              )}
              <p className="text-center font-bold truncate">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
