import { useCallback, useState } from 'react';

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = useCallback((text: string) => {
    if ('clipboard' in navigator) {
      try {

      } catch (error) {

      }
      return navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    }
  }, []);
  return { copied, copyToClipboard };
}
export function CopyToClipboard({ children }: { children: string }) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  return (
    <button
      onClick={
        () => {
          copyToClipboard(children);
        }
      }
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
