"use client";
import Schedule_Timeline from "@/components/schedule-timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TablesView } from "@/components/table-search";
// import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";

function WillBeUpdated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center text-center">
        Will be updated{" "}
        <AuroraText colors={["#c41ad1", "#0824a0", "#7928CA", "#1d094e"]}>
          Soon
        </AuroraText>
      </h1>
    </motion.div>
  );
}

export default function EventPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="Schedule" className="w-full">
          <TabsList className="justify-center mb-2 flex items-center mx-auto">
            <TabsTrigger value="Schedule">Schedule</TabsTrigger>
            <TabsTrigger value="Tables">Tables</TabsTrigger>
            <TabsTrigger value="Speakers"> Speakers</TabsTrigger>
          </TabsList>
          {/* Schedule */}
          <TabsContent value="Schedule">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Schedule_Timeline />
            </motion.div>
          </TabsContent>
          {/* Table */}
          <TabsContent value="Tables">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <TablesView /> */}
            </motion.div>
            <WillBeUpdated />
          </TabsContent>
          {/* Speakers */}
          <TabsContent value="Speakers">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <div className="flex flex-col items-center">
                <Image
                  src="/speakers/speaker1.jpg"
                  alt="Speaker 1"
                  width={150}
                  height={150}
                  className="rounded-full"
                  id="speaker-1"
                />
                <h3 className="mt-4 text-lg font-semibold">Speaker 1</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Expert in AI and Machine Learning.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/speakers/speaker2.jpg"
                  alt="Speaker 2"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <h3 className="mt-4 text-lg font-semibold">Speaker 2</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Renowned Data Scientist and Author.
                </p>
              </div>
            </motion.div> */}
            <WillBeUpdated />
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
