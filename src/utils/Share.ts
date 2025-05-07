const copyToClipboard = async (link: string) => {
  try {
    await navigator.clipboard.writeText(link);
    alert("URL이 복사되었습니다!");
  } catch (err) {
    alert("복사에 실패했습니다!");
    console.error("Error copying to clipboard:", err);
  }

  return;
};

export default copyToClipboard;
