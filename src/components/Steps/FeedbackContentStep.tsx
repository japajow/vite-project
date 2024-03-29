import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../lib/api";
import { CloseButton } from "../CloseButton";
import { Loading } from "../Loading";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { ScreenshotButton } from "../WidgetForm/ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    onFeedbackSent();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    onFeedbackSent();
    setIsSendingFeedback(false);
  }
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img
            src={feedbackTypeInfo.image}
            alt={feedbackTypeInfo.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..."
          ></textarea>

          <footer className="flex gap-2 mt-2">
            <ScreenshotButton
              onScreenShotTook={setScreenshot}
              screenshot={screenshot}
            />
            <button
              type="submit"
              disabled={comment.length === 0 || isSendingFeedback}
              className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              {isSendingFeedback ? <Loading /> : "Enviar feedback"}
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
