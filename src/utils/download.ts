import { saveAs } from 'file-saver'
export default function download(content: string, fileName: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  saveAs(blob, fileName)
}
