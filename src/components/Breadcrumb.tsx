import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function BreadcrumbDemo() {
    return (
        <div className="px-5 max-w-screen-2xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>

              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/">Shop</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
              <BreadcrumbLink href="/">Mans</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/">T-shirts</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

            </BreadcrumbList>
          </Breadcrumb>
        </div>
    )
  }



                {/* <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-3">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">SHOP</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Mens</DropdownMenuItem>
                    <DropdownMenuItem>T-shirts</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}
  