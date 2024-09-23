import ChromeTabStack from './chrome-tab-stack'

export default function Page() {
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Favorites</h1>
    <ChromeTabStack />
    </div>
  )
}
