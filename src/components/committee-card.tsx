import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Link2, Mail } from "lucide-react"
import type { CommitteeMember } from "@/lib/supabase"
import Image from "next/image"

interface CommitteeCardProps {
    member: CommitteeMember
}

export function CommitteeCard({ member }: CommitteeCardProps) {
    return (
        <Card className="overflow-hidden h-full flex flex-col">
            {/* Rectangular image at the top */}
            <div className="relative w-full h-48">
                {member.image_url ? (
                    <Image
                        src={member.image_url || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-2xl font-bold text-muted-foreground">
              {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .substring(0, 2)}
            </span>
                    </div>
                )}
            </div>

            <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                {member.role && <p className="text-muted-foreground">{member.role}</p>}
            </CardHeader>

            <CardContent className="flex-grow">
                {member.recognition && <p className="text-sm text-muted-foreground">{member.recognition}</p>}
            </CardContent>

            <CardFooter className="flex gap-2 pt-2 pb-4">
                {member.email && (
                    <Button variant="outline" size="sm" className="flex gap-1" asChild>
                        <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                            <Mail className="h-4 w-4" />
                            <span>Email</span>
                        </a>
                    </Button>
                )}
                {member.facebook_url && (
                    <Button variant="outline" size="sm" className="flex gap-1" asChild>
                        <a
                            href={member.facebook_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s Facebook`}
                        >
                            <Link2 className="h-4 w-4" />
                            <span>Facebook</span>
                        </a>
                    </Button>
                )}
                {member.linkedin_url && (
                    <Button variant="outline" size="sm" className="flex gap-1" asChild>
                        <a
                            href={member.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s LinkedIn`}
                        >
                            <ExternalLink className="h-4 w-4" />
                            <span>LinkedIn</span>
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
