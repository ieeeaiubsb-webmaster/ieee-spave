"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const tablesData = [
  {
    tableNo: "01",
    location: "Multipurpose Hall - Annex-2",
    guests: ["John Doe", "Marie Curie", "Albert Einstein", "Jane Smith"],
  },
  {
    tableNo: "02",
    location: "Multipurpose Hall - Annex-2",
    guests: ["John Doe", "Isaac Newton", "Ada Lovelace", "Grace Hopper"],
  },
  {
    tableNo: "03",
    location: "Multipurpose Hall - Annex-2",
    guests: ["Nikola Tesla", "Marie Curie", "Stephen Hawking", "Carl Sagan"],
  },
  {
    tableNo: "04",
    location: "Multipurpose Hall - Annex-2",
    guests: [
      "Leonardo da Vinci",
      "Galileo Galilei",
      "Charles Darwin",
      "Rachel Carson",
    ],
  },
];

export function TablesView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTables = useMemo(() => {
    if (!searchQuery.trim()) {
      return tablesData;
    }

    const query = searchQuery.toLowerCase();
    return tablesData.filter((table) =>
      table.guests.some((guest) => guest.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6 p-8">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-900 " />
        <Input
          type="text"
          placeholder="Search by guest name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-purple-900 focus:ring-purple-900 focus:border-transparent focus:outline-none"
        />
      </div>

      {filteredTables.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500">
            No tables found with guest `{searchQuery}`
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTables.map((table) => (
            <Card
              key={table.tableNo}
              className="hover:shadow-lg transition-shadow shadow-2xl/5"
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  Table No: {table.tableNo}
                </CardTitle>
                <CardDescription className="text-sm">
                  {table.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">
                    Guests:
                  </p>
                  <ul className="space-y-1">
                    {table.guests.map((guest, index) => (
                      <li
                        key={index}
                        className={`text-sm text-slate-600 pl-2 border-l-2 ${
                          searchQuery &&
                          guest
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                            ? "border-purple-500 bg-purple-50 font-medium"
                            : "border-slate-200"
                        }`}
                      >
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {searchQuery && filteredTables.length > 0 && (
        <p className="text-sm text-slate-500 text-center">
          Found {filteredTables.length} table
          {filteredTables.length !== 1 ? "s" : ""} with guest matching `
          {searchQuery}`
        </p>
      )}
    </div>
  );
}
